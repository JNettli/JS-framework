const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = nums
    .filter((number) => {
        if (number % 2 === 0) {
            return true;
        } else {
            return false;
        }
    })
    .reverse()
    .map((number) => {
        // console.log(number);
        return number;
    });

const arrayOfObjects = [
    {
        title: "Title 1",
        content: "Text for the thing 1",
    },
    {
        title: "Title 2",
        content: "Text for the thing 2",
    },
    {
        title: "Title 3",
        content: "Text for the thing 3",
    },
    {
        title: "Title 4",
        content: "Text for the thing 4",
    },
];

const filterObjects = arrayOfObjects
    .filter((thing) => {
        if (thing.title.includes("Title")) {
            return true;
        } else {
            return false;
        }
    })
    .map((item) => {
        return item.content;
    });

// console.log(filterObjects);

const taskArray = [
    {
        id: 1,
        title: "first",
    },
    {
        title: "second",
    },
    {
        id: 2,
        title: "third",
    },
];

const filteredArray = taskArray
    .filter((thing) => {
        if (thing.id !== undefined) {
            return true;
        } else {
            return false;
        }
    })
    .map((item) => {
        return item.title;
    });

console.log(filteredArray);
