$(document).ready(function(){
    $(".btnBox").on("click", function(){
        var id = $(this).data("id");
        $(".quadrato.selected").removeClass("selected");
        $("#" + id).addClass("selected");
    });

    $(".btnRistorante").on("click", function(event){
        event.preventDefault();
        var tipo = $(this).data("tipo");

        $("#lista-ristoranti li").each(function(){
            if($(this).data("tipo") == tipo) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    $(".btnDiff").on("click", function(event){
        event.preventDefault();
        var valore_data = $(this).data("tipo");
        var valore_attr = $(this).attr("data-tipo");

        console.log("DATA: " + valore_data);
        console.log("ATTR: " + valore_attr);

        // attr() aggiorna effettivamente il DOM
        console.log("Aggiungo un nuovo elemento data al DOM");
        $(this).attr("data-nuovo", "test2");

        // data() non aggiorna il DOM ma memorizza tutto nella cache di jQuery
        console.log("Aggiungo un nuovo elemento data nella cache di jQuery");
        $(this).data("prova", "test3");

        // attr() non "vede" quanto inserito da data()
        valore_data = $(this).attr("data-prova");
        console.log("Provo a recuperare con attr() il valore di data-prova inserito con data()");
        console.log(valore_data);

        valore_attr = $(this).data("nuovo");
        console.log("Provo a recuperare con data() il valore di data-nuovo inserito con attr()");
        console.log(valore_attr);

        // data() non "vede" l'aggiornamento dell'attributo
        $(this).attr("data-nuovo", "test4");
        console.log("Provo a recuperare con data() il valore AGGIORNATO (test4) di data-nuovo inserito con attr()");
        valore_attr = $(this).data("nuovo");
        console.log(valore_attr);
    });
});
