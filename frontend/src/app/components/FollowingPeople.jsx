"use client";

import Image from "next/image";

function FollowingPeople() {
  const users = [
    { id: 1, image: "/assets/user1.jpg" },
    { id: 2, image: "/assets/user2.jpg" },
    { id: 3, image: "/assets/user3.jpg" },
    { id: 4, image: "/assets/user4.jpg" },
   
  ];

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-4 min-w-max px-2 py-2">
        {users.map((user) => (
          <div key={user.id} className="flex-shrink-0">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-700">
              <Image
                src={user.image}
                alt="Profile"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FollowingPeople;