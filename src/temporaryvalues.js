let Eventdetails = [
    {
        Eventname:"Marriage",
        Date: "21/09/2024",
        Location: "Rasipuram",
        Description:"Arrange Grandly"
    },
    { 
        Eventname:"Party",
        Date: "01/10/2024",
        Location: "Velur",
        Description:"Arrange Grandly"
    },
    {
        Eventname:"Festival",
        Date: "05/06/2024",
        Location: "Salem",
        Description:"Arrange Grandly"
    },
    {
        Eventname:"Business Party",
        Date: "17/03/2024",
        Location: "Tiruchengode",
        Description:"Arrange Grandly"
    }
]

export var Listall = () =>{
    return Eventdetails;
}

export let Create = (obj) => {
    Eventdetails.push(obj);
}

export const Remove1 = (index) => {
    Eventdetails = Eventdetails.filter(
        (data, pos) => {
            return pos !== index;
        }
    )
    return Eventdetails;
}

 
export const Read = (myindex) => {
    return Eventdetails[myindex];
}

export const Fetchexact = (name) => {
    const temp = Eventdetails.filter(
        (data, index) => {
            return data.Eventname === name;
        }
    )

    return temp[0];
}


export const replace = (data, pos) => {
    Eventdetails[pos] = data;
    // replace
}