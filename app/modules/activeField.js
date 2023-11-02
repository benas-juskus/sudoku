function markActive(){  // to mark active field and zone ( line column and square )
    let field = document.getElementsByClassName("field");
    for(let f = 0; f < field.length;f++){
        field[f].addEventListener("click", activeFieldCheck);
        field[f].addEventListener("click", () => field[f].classList.add("active"));// adds class to the element,marks the active field (the one user clicked on)
        field[f].addEventListener("click", function(event){
            let target_cl_list = event.currentTarget.classList.value;
            let target_sq_class = target_cl_list.match(/sq\d/)[0];
            let target_l_class = target_cl_list.match(/l\d/)[0];
            let target_c_class = target_cl_list.match(/c\d/)[0];
            activeZoneCheck()
            //--------reikia susitvarkyti sita zona( code too wet)!!---------------
            let fld_sq_class = document.querySelectorAll(`.${target_sq_class}`);
            for(let c = 0; c < fld_sq_class.length; c++){
                fld_sq_class[c].classList.add("active_zone")
            }
            let fld_l_class = document.querySelectorAll(`.${target_l_class}`);
            for(let c = 0; c < fld_l_class.length; c++){
                fld_l_class[c].classList.add("active_zone")
            }
            let fld_c_class = document.querySelectorAll(`.${target_c_class}`);
            for(let c = 0; c < fld_c_class.length; c++){
                fld_c_class[c].classList.add("active_zone")
            }
            //----------------------------------------------------------------------
        });
    }
}

function activeFieldCheck(){// chacks if clicked field has class "active". If found, removes it 
    let active_field = document.getElementsByClassName("active");
    if (typeof active_field[0] != "undefined") active_field[0].classList.remove("active");
 }

function activeZoneCheck(){// chacks if clicked field has class "active". If found, removes it 
    let active_zone = document.querySelectorAll(".active_zone");
    for(let i = 0; i < active_zone.length; i++){
        active_zone[i].classList.remove("active_zone");
    }
 }


 export {markActive};

