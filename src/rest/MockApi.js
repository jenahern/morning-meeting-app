const API_ENDPOINT = 'https://632753175731f3db99577ba9.mockapi.io/';

class WeatherApi {
    get = async () => {
        //using a try/catch in case something goes wrong
        try {
        //makes the call for data
        const resp = await fetch(API_ENDPOINT);
        //have data returned into json
        const data = await resp.json();
            if (data.length > 3) {
                data.reverse().length = 3;
            }
        return data;
        //(3) is the exception, what went wrong
        } catch(e) {
            console.log('Ooops, fetch is having issues', e);
        } 
    }
    //method for PUT (Update), takes a parameter, House, to update it
    put = async (cloud) => {
        try {
            //want the id from the house to identify it from the other houses in the array, with 2nd object from the request data
            const resp = await fetch(`${API_ENDPOINT}/${cloud._id}`, {
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cloud)
            });
            return await resp.json();
         } catch(e) {
            console.log('Ooops, looks like updating the clouds has an issue', e);
         }

    }

    post = async (cloudValue) => {
        try {
            //want the id from the house to identify it from the other houses in the array, with 2nd object from the request data
            const resp = await fetch(`${API_ENDPOINT}`, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({value: cloudValue})
            });
            return await resp.json();
         } catch(e) {
            console.log('Ooops, looks like updating the cloud value has an issue', e);
         }

    }
}


//putting the HousesApi method into another variable to use in other components.
export const weatherApi = new WeatherApi();