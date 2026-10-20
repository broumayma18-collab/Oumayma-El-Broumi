
const bonnesReponses = {
    q1: "B",
    q2: "B",
    q3: ["A", "C"],
    q4: ["A", "B", "C"],
    q5: ["A", "B"]
};


function initialiserQCM() {
    document.getElementById("qcmForm").reset();
}é


function afficherCorrige() {
    let fenetreCorrige = window.open("", "_blank", "width=700,height=650");
    let contenu = `
        <html>
        <head>
            <title>Corrigé du QCM</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.5; }
                .correct { color: green; text-decoration: underline; font-weight: bold; }
            </style>
        </head>
        <body>
            <h2>Corrigé Complet du QCM</h2>
            <p>1. Quel langage est utilisé pour styliser les pages web ?<br>
               A) HTML<br><span class="correct">B) CSS</span><br>C) JavaScript</p>
            <p>2. Quelle balise HTML permet d'insérer un lien hypertexte ?<br>
               A) &lt;link&gt;<br><span class="correct">B) &lt;a&gt;</span><br>C) &lt;href&gt;</p>
            <p>3. Lesquels de ces langages sont des langages de programmation web ?<br>
               <span class="correct">A) JavaScript</span><br>B) HTML<br><span class="correct">C) Python (côté serveur)</span></p>
            <p>4. Quels sélecteurs existent en CSS ?<br>
               <span class="correct">A) Sélecteur d'élément</span><br><span class="correct">B) Sélecteur de classe</span><br><span class="correct">C) Sélecteur d'ID</span></p>
            <p>5. Quelles méthodes JavaScript permettent de sélectionner un élément du DOM ?<br>
               <span class="correct">A) getElementById</span><br><span class="correct">B) querySelector</span><br>C) selectElementByMagic</p>
        </body>
        </html>
    `;
    fenetreCorrige.document.write(contenu);
    fenetreCorrige.document.close();
}


function tableauxSontEgaux(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every(val => arr2.includes(val));
}


function obtenirValeursCases(nom) {
    let cases = document.querySelectorAll(`input[name="${nom}"]:checked`);
    let valeurs = [];
    cases.forEach(c => valeurs.push(c.value));
    return valeurs;
}

function afficherResultat() {
    let form = document.forms["qcmForm"];
    let texteResultats = "<h3>Résultats de votre test :</h3><ul>";

    
    let q1User = form["q1"].value;
    if (q1User === bonnesReponses.q1) {
        texteResultats += "<li>la réponse de la question 1 est correcte</li>";
    } else {
        texteResultats += "<li>la réponse de la question 2 est incorrecte</li>"; // ou q1 incorrecte
    }

    
    let q2User = form["q2"].value;
    if (q2User === bonnesReponses.q2) {
        texteResultats += "<li>la réponse de la question 2 est correcte</li>";
    } else {
        texteResultats += "<li>la réponse de la question 2 est incorrecte</li>";
    }

    
    let q3User = obtenirValeursCases("q3");
    if (tableauxSontEgaux(q3User, bonnesReponses.q3)) {
        texteResultats += "<li>la réponse de la question 3 est correcte</li>";
    } else {
        texteResultats += "<li>la réponse de la question 3 est incorrecte</li>";
    }

    
    let q4User = obtenirValeursCases("q4");
    if (tableauxSontEgaux(q4User, bonnesReponses.q4)) {
        texteResultats += "<li>la réponse de la question 4 est correcte</li>";
    } else {
        texteResultats += "<li>la réponse de la question 4 est incorrecte</li>";
    }

    
    let q5User = obtenirValeursCases("q5");
    if (tableauxSontEgaux(q5User, bonnesReponses.q5)) {
        texteResultats += "<li>la réponse de la question 5 est correcte</li>";
    } else {
        texteResultats += "<li>la réponse de la question 5 est incorrecte</li>";
    }

    texteResultats += "</ul>";

    
    let fenetreResultat = window.open("", "_blank", "width=500,height=400");
    fenetreResultat.document.write(`
        <html>
        <head>
            <title>Résultat du Test</title>
            <style>body { font-family: Arial, sans-serif; padding: 20px; }</style>
        </head>
        <body>
            ${texteResultats}
        </body>
        </html>
    `);
    fenetreResultat.document.close();
}
