export default function ( {store, route, redirect }){
    if(store.state.is_ENG==true){
        console.log(route)
        console.log(route.path)
        //if(route.path.search(/ENG/g)==-1){
        //        return redirect(route.fullPath+'?l=ENG'+route.hash)
        //}
    }

}

//export default function( { store, route }){
//        if(store.state.is_ENG=='ENG') route.path += 'l=ENG'
//        console.log(route)
//}
