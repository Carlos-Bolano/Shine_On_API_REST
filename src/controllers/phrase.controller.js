import Phrase from "../models/phrase.model.js";

export const getPhrase = async (req, res) => {
  try {
    const phrase = await Phrase.findById(req.params.id);
    res.json(phrase);
  } catch (error) {
    console.log(error);
  }
};

export const getPhrases = async (req, res) => {
  try {
    const phrases = await Phrase.find({});
    res.json(phrases);
  } catch (error) {
    console.log(error);
  }
};

export const createPhrase = async (req, res) => {
  try {
    const { phrase } = req.body;

    const newPhrase = new Phrase({
      phrase: phrase,
    });

    console.log(newPhrase);

    const phraseSaved = await newPhrase.save();
    res.json(phraseSaved);
  } catch (error) {
    console.log(error);
  }
};

export const deletePhrase = async (req, res) => {
  try {
    const { id } = req.params;
    const phraseDeleted = await Phrase.findByIdAndDelete(id);
    res.json(phraseDeleted);
  } catch (error) {
    console.log(error);
  }
};

export const updatePhrase = async (req, res) => {
  try {
    const { phrase } = req.body;
    const id = req.params.id;
    const phraseUpdated = await Phrase.findByIdAndUpdate(id, {
      phrase: phrase,
    });
    res.json(phraseUpdated);
  } catch (error) {
    console.log(error);
  }
};
