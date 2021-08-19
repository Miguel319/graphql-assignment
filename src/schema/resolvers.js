const Place = require("../models/Place");

const resolvers = {
  Query: {
    getPlaces: async (_, { input }) => {
      try {
        if (input) return await Place.find({ country: input.country });

        return await Place.find({});
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    getPlaceById: async (_, { input }) => {
      try {
        const place = await Place.findById(input);

        if (!place) throw new Error("Place not found");

        return place;
      } catch (e) {
        console.log(e);
        return error(e);
      }
    },
  },
  Mutation: {
    createPlace: async (_, { input }) => {
      try {
        const place = await Place.create(input);

        return place;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    updatePlace: async (_, { _id, input }) => {
      try {
        let place = await Place.findById(_id);

        if (!place) throw Error("Place not found");

        place = await Place.findOneAndUpdate({ _id }, input, { new: true });

        return place;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    deletePlace: async (_, { _id }) => {
      try {
        let place = await Place.findById(_id);

        if (!place) throw Error("Place not found");

        return await Place.findOneAndDelete(_id);
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  },
};

module.exports = { resolvers };
