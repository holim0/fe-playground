module.exports = {
  prompt: ({ prompter }) => {
    return prompter.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ]);
  },
};
