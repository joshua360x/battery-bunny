

export function renderBunnies(family) {



          // create three elements for each family, one for the whole family, one to hold the name, and one to hold the bunnies
    const div = document.createElement('div');
    const familyNameEl = document.createElement('p');
        // add the bunnies css class to the bunnies el, and family css class to the family el
    familyNameEl.classList.add('family');
        // put the family name in the name element
    familyNameEl.textContent = family.name;


    div.append(familyNameEl);

    return div;
    // for (const el of bunny.fuzzy_bunnies) {
     



    //     const bunnyELEMENT = document.createElement('p');
    //     bunnyELEMENT.textContent = el.name;

    
    //     bunnyELEMENT.addEventListener('click', async() => {
    //         await deleteBunny(el.id);
    //     // displayFamilies();
        
    //     });
    // // bunnyEl.append(bunnyELEMENT);
    // return bunnyELEMENT
    // }

}