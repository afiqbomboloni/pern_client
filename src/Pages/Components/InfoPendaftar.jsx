import { useEffect, useState } from "react";
import { getCountUsers } from "../../services/User";
const InfoPendaftar = () => {
  const [countUsers, setCountUsers] = useState(0)
  const handleCountUsers = async () => {
    try {
      const result = await getCountUsers();
      setCountUsers(result.data.total_users);
    } catch (error) {
      console.error("Error counting users:", error);
    }
  }

  useEffect(() => {
    handleCountUsers();
  }, []);
    return (
        <section class="h-[15vh] bg-blue-50  flex justify-center items-center">
        <div class="text-2xl text-center font-semibold">
          <p>Ada {countUsers} Orang yang Telah Mendaftar</p>
        </div>
      </section>
    )
}

export default InfoPendaftar