

import template from "./template/widget"; // Charge le template de la galerie


export default class WigetDiscord {

    constructor(data, el) {
        this.template = template
        this.channels = data.channels;
        this.users = data.members;
        this.onlineUsers = data.presence_count
        this.serverName = data.name;
        this.el = document.querySelector(el)
        this.render()
        console.log(data);
    }

    render() {
        
        this.template = this.tmplReplace(this.template);
        this.el.innerHTML = this.template
    }
    // remplacer des parametres dans un template
    tmplReplace(data) {
        data = data.replaceAll(/\{\{\s*(\w+)\s*\}\}/g, '{{$1}}');
        for (let propriete in this) {
            data = data.replace(
                "{{" + propriete + "}}",
                this[propriete]
            );
        }
        return data
    }

}