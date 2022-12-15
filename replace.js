const replace = require('replace-in-file');


const results = replace.sync({
    //    files: './final_metadata_launch/*.json',
    //files: './working_copy__final_metadata_launch/*.json',
    files: './FINAL_Metadata_ALL_MINIs/*.json',
    from: /Qmf4o9ZgJUG28Cct967WurRz1GEkBBNNeQEHvhhQzNuGhj/g,
    //from: 'Providing life-changing weekly giveaways and gamified yield farming rewards through NFT staking. Rewards always paid in $AVAX.',
    to: 'QmeS9QQDWJqf1kc1FzNHj5xYiVjHasErdfnwrrprmE7Fko',
    //from: '\"value\": \"Hip 8\"',
    //from: '\"name\": \"MINI Market Maker #',
    //to: '\"name\": \"MINI #',
    //to: '\"value\": \"Light\"',
    countMatches: true,
});

console.log(results);