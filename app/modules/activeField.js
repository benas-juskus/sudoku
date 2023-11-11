
/**
 * to mark active field and zone ( line column and square )
 */
function markActive(){
    let field = document.getElementsByClassName("field");
    for(let f = 0; f < field.length;f++){
        field[f].addEventListener("click", activeFieldCheck);
        field[f].addEventListener("click", function(event){
            let selected_fld = event.target.innerHTML;
            for(let f of field) {
                if(f.innerHTML == selected_fld && f.innerHTML != "") f.classList.add("active")    
            };
            field[f].classList.add("active")
        });
        field[f].addEventListener("click", function(event){
            let target_cl_list = event.currentTarget.classList.value;
            let target_sq_class = target_cl_list.match(/sq\d/)[0];
            let target_l_class = target_cl_list.match(/l\d/)[0];
            let target_c_class = target_cl_list.match(/c\d/)[0];
            activeZoneCheck()
            activeFieldMark(target_sq_class)
            activeFieldMark(target_l_class)
            activeFieldMark(target_c_class)
        });
    }
}

//----------------------------------------------------------------------

/**
 * marks all fields with same class as active field
 * @param {string} target_class 
 * @example activeFieldMark(target_sq_class)
 */
function activeFieldMark(target_class){
    let fld_sq_class = document.querySelectorAll(`.${target_class}`);
        for(let c = 0; c < fld_sq_class.length; c++){
            fld_sq_class[c].classList.add("active_zone");                
        }
}

/**
 * checks if field has class "active". If found, it is removed 
 */
function activeFieldCheck(){ 
    let active_field = document.querySelectorAll(".active");
    for(let e of active_field){
        e.classList.remove("active")
    }
 }

/**
 * checks for "active_zone" class. if found, it is removed 
 */
function activeZoneCheck(){ 
    let active_zone = document.querySelectorAll(".active_zone");
    for(let i = 0; i < active_zone.length; i++){
        active_zone[i].classList.remove("active_zone");
    }
 }

 export {markActive};

