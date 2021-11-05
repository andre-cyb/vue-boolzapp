Vue.config.devtools = true;

let app = new Vue({
    el: "#root",
    data: {
        contactList: [
            {
                name: 'Michele',
                avatar: 'IMG/avatar_1.jpg',
                info: false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    },
                ]
            },
            {
                name: 'Fabio',
                avatar: 'IMG/avatar_2.jpg',
                info: false,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ]
            },
            {
                name: 'Samuele',
                avatar: 'IMG/avatar_3.jpg',
                info: false,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: 'IMG/avatar_4.jpg',
                info: false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        currentChat:
        {
            name: 'Michele',
            avatar: 'IMG/avatar_1.jpg',
            info: false,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                },
            ]
        },
        ///////////////// {} nuovo messaggio
        newMessage: {
            date: "",
            text: "",
            status: 'sent',
            index: ``
        },
        searchContact: "",


    },
    methods: {
        ///////////////////////////////////funzioni per contatti sezione sx, recupero ultimo mess e ultima data di invio
        getLastMessage(messages) {
            if (messages.length === 0) {
                return "";
            }
            let lastMessage = messages[messages.length - 1].text;
            return lastMessage.slice(0, 20);
        },
        getLastTimeStamp(messages) {
            if (messages.length === 0) {
                return "";
            }
            let lastTimeStamp = messages[messages.length - 1].date;
            return lastTimeStamp;
        },
        /////////////////////////////////// Funzioni: prendere la chat selezionata, prendere la data del mess dalla chat corrente

        activeChat(contact, i) {
            this.currentChat = contact;
            this.currentChat.index = i;
            /* this.currentChat.visible = true; */
            /* if (!this.currentChat) {
                this.currentChat.visible = false;
                return;
            } */
            console.log(contact);
            console.log(this.currentChat);
        },
        timeChat() {
            let chatOnDisplay = this.currentChat;
            if (chatOnDisplay.messages.length === 0) {
                return "";
            }
            let thisTime = chatOnDisplay.messages[chatOnDisplay.messages.length - 1].date;
            return thisTime;
        },

        /////////////////////////////////// funzione con eventi ad invio mess
        sendMessage() {

            if (this.newMessage.text.trim() === "") {
                return;
            }
            var datetime = new Date().toLocaleString();
            this.newMessage.date = datetime;

            this.currentChat.messages.push(this.newMessage);

            this.newMessage = {
                date: "",
                text: "",
                status: 'sent'
            };

            setTimeout(() => {
                var datetime = new Date().toLocaleString();

                let autoMessage = {
                    date: datetime,
                    text: "Ok",
                    status: 'received'
                };
                this.currentChat.messages.push(autoMessage);
            }, 1000);

        },
        ///////////////////////////////////
        contactFilter() {
            return this.contactList.filter((contatto) => {
                return this.contatto.name.includes(this.searchContact);
            });
        },
        ////////////////////////////////////
        /* displayMenu() {
            console.log("event");
        } */


    }
});

// if this.newMessage.text === ""  ? 
//:class="this.newMessage.text === `` ? `show_send_icon` : ``"

//v-on:click="displayMenu"
//:style="currentChat.info ? `d-block` :``"