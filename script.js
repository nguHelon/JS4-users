const users = [
    {
        names: "Ngu Helon",
        tel: "+237 82751441",
        about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro sint cupiditate pariatur
        provident. Voluptatem earum quisquam sint non laborum minus dolorum nam aspernatur sit`,
        category: "developer",
        img: "helon.jpg"
    },
    {
        names: "anna johnson",
        tel: "+237 82751441",
        about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro sint cupiditate pariatur
        provident. Voluptatem earum quisquam sint non laborum minus dolorum nam aspernatur sit`,
        category: "designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    },
    {
        names: "peter jones",
        tel: "+237 82751441",
        about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro sint cupiditate pariatur
        provident. Voluptatem earum quisquam sint non laborum minus dolorum nam aspernatur sit`,
        category: "advocate",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg"
    }, {
        names: "susan smith",
        tel: "+237 82751441",
        about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro sint cupiditate pariatur
        provident. Voluptatem earum quisquam sint non laborum minus dolorum nam aspernatur sit`,
        category: "manager",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
    }
];

// user divs
const usersdiv = document.querySelector("#users-div .users");
const userViewDiv = document.querySelector(".users-view .users-section");
const userView = document.querySelector(".users-view");

// input data
const username = document.querySelector("#name");
const tel = document.querySelector("#tel");
const about = document.querySelector("#about");
const img = document.querySelector("#img");
const category = document.querySelector("#category");

// btn to add a new user in usersdiv div.
const userBtn = document.querySelector("#btn-user");

// btn to view all the users
const viewUsersBtn = document.querySelector("#viewUsersBtn");

// removing default behaviour from the form
const form = document.querySelector("form");

// category btns
const categoryBtns = Array.from(document.querySelectorAll(".category-btns button"));

form.addEventListener("click", (e) => {
    e.preventDefault();
})

window.addEventListener("DOMContentLoaded", () => {
    displayUsers1(users);
});

// add user on userBtn click
userBtn.addEventListener("click", () => {
    let obj = {
        names: username.value,
        tel: tel.value,
        about: about.value,
        category: category.value,
        img: img.value
    };

    users.push(obj);
    displayUsers1(users);
});

//view all users
viewUsersBtn.addEventListener("click", () => {
    userView.classList.add("active");
    displayUsers2(users);
});

document.getElementById("close").addEventListener("click", () => {
    userView.classList.remove("active");
});

// display users according to filter
categoryBtns.forEach((button) => {
    button.addEventListener("click", () => {
        let category = button.dataset.category;
        let newUsers = users.filter((item) => {
            return item.category == category;
        });

        if (category == "all") {
            displayUsers2(users);
        } else {
            displayUsers2(newUsers);
        }
    })
})

const displayUsers1 = (users) => {
    let user = users.map((item) => {
        return `
        <div class="user">
            <div class="img">
                <img src="${item.img}" alt="">
            </div>
            <div class="info">
                <div class="person">
                    <h1>${item.names}</h1>
                    <p>${item.tel}</p>
                </div>
                <button class="${item.category}">${item.category}</button>
            </div>
        </div>`;
    });

    user = user.join("");
    usersdiv.innerHTML = user;
}

const displayUsers2 = (users) => {
    let user = users.map((item) => {
        return `
        <div class="usersbox ${item.category}">
            <div class="info">
                <h1>${item.names}</h1>
                <p>
                    ${item.about}
                </p>
            </div>
            <hr>
            <div class="account">
                <div class="address">
                    <img src="${item.img}" alt="${item.names}">
                    <span>${item.tel}</span>
                </div>
                <button>${item.category}</button>
            </div>
        </div>`;
    });

    user = user.join("");
    userViewDiv.innerHTML = user;
}