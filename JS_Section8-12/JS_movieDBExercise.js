var movieDB = [
    {title: "Frozen",
    hasWatched: true,
    rating: 4
    },
    {title: "Hercules",
    hasWatched: true,
    rating: 5
    },
    {title: "Simba",
    hasWatched: false,
    rating: 1
    },
    {title: "Lion King",
    hasWatched: true,
    rating: 3
    }
]

for(var i = 0; i < movieDB.length; i++){
    var descr = movieDB[i].title + "\" - " + movieDB[i].rating + " stars";
    if(movieDB[i].hasWatched === true){
        console.log("You have watched \"" + descr);
    }
    else{
        console.log("You have not seen \"" + descr);
    }
}