
import getCurrentUser from "../actions/getCurrentUser"
import getFavoriteListings from "../actions/getFavoriteListings"
import EmptyState from "../components/EmptyState"
import FavoriteClient from "./FavoriteClient"

const page = async() => {
  const listings = await getFavoriteListings()
  const currentUser = await getCurrentUser()
console.log(listings)
  if(listings.length === 0){
    return (
      <EmptyState
      title="No favorites found"
      subtitle="Looks like have no favorite listings."
      />
    )
  }

  return (
    <FavoriteClient
    listings={listings}
    currentUser={currentUser}
    />
  )
}

export default page