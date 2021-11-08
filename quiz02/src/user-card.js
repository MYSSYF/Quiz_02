import {
    getDatabase,
    ref,
    set,
    onValue,
    push,
    update,
    child
} from 'firebase/database';

export class userCard {
    constructor(user) {
        this.user = user;
    }

    render() {
        let card = document.createElement("div");
        card.className = "user-card";

        let title = document.createElement("h3");
        title.className = "user-card-title";
        title.innerHTML = this.user.nombre;

        let content = document.createElement("p");
        content.className = "user-card-content";
        content.innerHTML = this.user.curso;

        let content2 = document.createElement("p2");
        content2.className = "user-new";
        content2.innerHTML = this.user.codigo;

        let numer = document.createElement("num");
        numer.className = "numero";
        numer.innerHTML = this.user.numero;

        let deleteBtn = document.createElement("button");
        deleteBtn.className = "user-card-delete";
        deleteBtn.innerHTML = "X";
        deleteBtn.addEventListener("click", (e, ev) => {


            // Obtener la base datos
            const db = getDatabase();
            const userRef = ref(db, 'users/' + this.user.id);
         

            // escribir un nuevo usuario
            set(userRef, null);
        });
        let masBtn = document.createElement("button");
        masBtn.className = "user-card-plus";
        masBtn.innerHTML = "+";
        masBtn.addEventListener("click", (e, ev) => {


            const db = getDatabase();
            const userRef = ref(db, 'users/' + this.user.id);


       

            // escribir un nuevo usuario

            update(ref(db, 'users/' + this.user.id), {
                numero: this.user.numero++,
            })

        });

        let menosBtn = document.createElement("button");
        menosBtn.className = "user-card-minus";
        menosBtn.innerHTML = "-";
        menosBtn.addEventListener("click", (e, ev) => {
        

            const db = getDatabase();
            const userRef = ref(db, 'users/' + this.user.id);


      

            // escribir un nuevo usuario

            update(ref(db, 'users/' + this.user.id), {
                numero: this.user.numero--,
            })

        });




        card.appendChild(title);
        card.appendChild(content);
        card.appendChild(content2);
        card.appendChild(numer);
        card.appendChild(deleteBtn);
        card.appendChild(masBtn);
        card.appendChild(menosBtn);
        return card;
    }


}