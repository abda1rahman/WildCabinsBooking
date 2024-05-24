import { Reservation } from "@prisma/client";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import EmptyState from "../components/EmptyState";
import TripClient from "./TripClient";

const TripPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return <EmptyState title='Unauthorized' subtitle='Please login' />;
  }

  const reservations = await getReservations({
    userId: currentUser.id,
  });
  if (reservations.length === 0) {
    return (
      <EmptyState
        title='No trips found'
        subtitle='Looks like you havent reserved any trips.'
      />
    );
  }

  return <TripClient reservations={reservations} currentUser={currentUser} />;
};

export default TripPage;
