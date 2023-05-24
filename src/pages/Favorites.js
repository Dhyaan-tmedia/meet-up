import { useContext } from "react";
import  FavoritesContext  from "../store/Favorites-context";
import meetupList from "../components/layouts/meetups/MeetupList";
function FavoritesPage(){
    const favoritesCtx = useContext(FavoritesContext);
    let content;
    if(favoritesCtx.totalfavorites===0){
        content =<p>You got no favorites yet.Start adding some?</p>
    }else{
        content = <meetupList meetups={favoritesCtx.favorites}/>
    }
    return (<section>
        <h1>My Favorites</h1>
        {content}
    </section>)
}
export default FavoritesPage;