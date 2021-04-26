// ?fetch data
// ?async await
// document.ready
// onclick function to search for the info
// be able to input users input into search
// async await to grab data
// change data to json data
// prevent default info from populating

// document,ready function
$(()=>{
    
    $('form').on('submit', (event)=>{
        event.preventDefault()

// set variable for userInput
const userInput = $('input[type="text"]').val()

console.log(userInput)

// create async function
async function getPokeData(){
    // create a variable to hold what we fetch
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
    // change the date to json data
    const data= await response.json()
    $('#pokeName').html(data.forms[0].name)
    var $obj = $('#pokeType').html(data.types[0].type.name)
    $('#pokeNum').html(data.id)
    var $photo = data.sprites.front_default
    $('#poke').attr("src",$photo)
    console.log(data)
console.log($photo)
   console.log($obj[0].outerText)

if($obj[0].outerText=='normal'){
    $("#colorbox").css("background-color","rgb(196, 189, 149)")
    }
else if($obj[0].outerText=='fire'){
    $("#colorbox").css("background-color","orange")
        }
else if($obj[0].outerText=='water'){
    $("#colorbox").css("background-color","blue")    
    
 }
else if($obj[0].outerText== 'grass'){
        $("#colorbox").css("background-color","green")    

}
else if($obj[0].outerText=='electric'){
    $("#colorbox").css("background-color","goldenrod")    

}
else if($obj[0].outerText=='ice'){
    $("#colorbox").css("background-color","aquamarine")    

}
else if($obj[0].outerText=='fighting'){
    $("#colorbox").css("background-color","red")    

}
else if($obj[0].outerText=='poison'){
    $("#colorbox").css("background-color","rgb(167, 167, 216);")    

}
else if($obj[0].outerText=='ground'){
    $("#colorbox").css("background-color","purple")    

}
else if($obj[0].outerText== 'flying'){
    $("#colorbox").css("background-color","violet")    

}
else if($obj[0].outerText=='psychic'){
    $("#colorbox").css("background-color","hotpink")    

}
else if($obj[0].outerText=='bug'){
    $("#colorbox").css("background-color","greenyellow")    

}
else if($obj[0].outerText=='rock'){
    $("#colorbox").css("background-color","tan")    

}
else if($obj[0].outerText=='ghost'){
    $("#colorbox").css("background-color","mediumpurple")    

}
else if($obj[0].outerText== 'dark'){
    $("#colorbox").css("background-color","rgb(104, 89, 70)")    

}
else if($obj[0].outerText=='dragon'){
    $("#colorbox").css("background-color","rgb(112, 60, 112)")    

}
else if($obj[0].outerText== 'steel'){
    $("#colorbox").css("background-color","steelgrey")    

}
else if($obj[0].outerText== 'fairy'){
    $("#colorbox").css("background-color","hotpink")    

}






}
getPokeData()

    })

})