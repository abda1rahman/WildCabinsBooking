"use client"

import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";
import { SafeUser, safeListing } from "../types"

interface FavoriteClientProps {
  currentUser: SafeUser | null;
  listings: safeListing[];
}

const FavoriteClient: React.FC<FavoriteClientProps> = ({
  currentUser,
  listings
}) => {
  return (
    <Container>
      <Heading
      title="Favorites"
      subtitle="List of places you have favortied!"
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {listings.map((listing)=> (
          <ListingCard 
          key={listing.id}
          currentUser={currentUser}
          data={listing}
          
          />
        ))}
      </div>
    </Container>
  )
}

export default FavoriteClient