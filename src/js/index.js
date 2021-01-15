import WidgetDiscord from "./modules/widget";




function discordAPI(el) {
    const init = {
        method: 'GET',
        mode: 'cors',
        cache: 'reload'
    }
    fetch('https://discord.com/api/guilds/688348182840868886/widget.json', init).then(function (response) {
        if (response.status != 200) {
            console.log("it didn't work" + response.status);
            return
        }
        response.json().then(function (data) {
            // console.log(data);

            new WidgetDiscord(data,"#widgetDiscord");

        })
    })
        .catch(function (err) {
            console.log('fetch error: ' + err)
        })


}

discordAPI()

// let test = file_get_contents('https://discord.com/api/guilds/688348182840868886/widget.json')
