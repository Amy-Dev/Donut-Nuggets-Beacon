const buttons = document.querySelectorAll("button");

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function() {
                const joueur = buttons[i].innerHTML;
                const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
                let resultat = "";

                if (joueur === robot) {
                    resultat = "Egalité"
                }
                else if ((joueur === "Donut"  && robot === "Beacon") || (joueur === "Nuggets" && robot ==="Donut") || (joueur === "Beacon" && robot === "Nuggets")) {resultat = "Gagné";}
                else {
                    resultat = "Perdu";
                }

                document.querySelector(".resultat").innerHTML = `Joueur : ${joueur} </br> Robot : ${robot} </br> ${resultat}`;

                
            })
        }