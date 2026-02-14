import { motion } from "framer-motion";

const WeddingCalendar = () => {
  const weddingDate = new Date("2026-06-12");
  const year = weddingDate.getFullYear();
  const month = weddingDate.getMonth();
  
  // Get first day of month and number of days
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  // Calendar grid
  const days = [];
  
  // Previous month days
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({ day: daysInPrevMonth - i, currentMonth: false });
  }
  
  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ day: i, currentMonth: true, isWeddingDay: i === 12 });
  }
  
  // Next month days to fill grid
  const remainingDays = 42 - days.length;
  for (let i = 1; i <= remainingDays; i++) {
    days.push({ day: i, currentMonth: false });
  }

  const monthName = new Intl.DateTimeFormat("kk", { month: "long" }).format(weddingDate);
  const dayNames = ["Жек", "Дс", "Сс", "Ср", "Бс", "Жм", "Сн"];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 3.2 }}
      className="flex justify-center mt-12"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20">
        <div className="mb-6 text-center">
          <h3 className="text-gold text-xl font-semibold">
            {monthName} {year}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">Біздің ерек күні</p>
        </div>

        <div className="w-64">
          {/* Day headers */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {dayNames.map((day) => (
              <div key={day} className="text-center text-xs text-muted-foreground font-semibold">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-2 relative">
            {days.map((item, index) => (
              <div key={index} className="relative">
                {item.isWeddingDay ? (
                  <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                    className="relative w-10 h-10 flex items-center justify-center"
                  >
                    {/* Heart shape background */}
                    <svg
                      viewBox="0 0 24 24"
                      className="absolute inset-0 w-full h-full text-gold/60 fill-current"
                      style={{ filter: "drop-shadow(0 0 8px rgb(218, 165, 32, 0.6))" }}
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    {/* Date number */}
                    <span className="relative z-10 text-lg font-bold text-gold">
                      {item.day}
                    </span>
                  </motion.div>
                ) : (
                  <div
                    className={`w-10 h-10 flex items-center justify-center text-sm rounded transition-colors ${
                      item.currentMonth
                        ? "text-foreground hover:bg-gold/10"
                        : "text-muted-foreground/40"
                    }`}
                  >
                    {item.day}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        />
      </div>
    </motion.div>
  );
};

export default WeddingCalendar;
