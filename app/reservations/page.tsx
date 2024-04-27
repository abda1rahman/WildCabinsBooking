import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";
import ReservationsClient from "./ReservationsClient";
import { safeReservations } from "../types";
import { Reservation } from "@prisma/client";

// import TripsClient from "./ReservationsClient";

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
        <EmptyState title="Unauthorized" subtitle="Please login" />
    );
  }

  const reservations: any = await getReservations({ authorId: currentUser.id });

  if (reservations.length === 0) {
    return (
        <EmptyState
          title="No reservations found"
          subtitle="Looks like you have no reservations on your properties."
        />
    );
  }

  return (
    <ReservationsClient 
    reservations={reservations}
    currentUser={currentUser}
    />
  )

  // return (
  //     <TripsClient reservations={reservations} currentUser={currentUser} />
  // );
};

export default ReservationsPage;