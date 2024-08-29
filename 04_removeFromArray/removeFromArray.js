const removeFromArray = function(array,...arguement) {
    const newArray = [];

    array.forEach((item) => {

        if(!arguement.includes(item)){
            newArray.push(item);
        }

    });

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
