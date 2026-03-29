"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Row = [string, string, string, string];

interface Section {
  title: string;
  cols: [string, string, string, string];
  rows: Row[];
}

interface Day {
  label: string;
  date: string;
  title: string;
  subtitle: string;
  note?: string;
  sections: Section[];
}

const DAYS: Day[] = [
  {
    label: "Tue",
    date: "Mar 31",
    title: "Fun Run, Registration",
    subtitle: "& Venue Orientation",
    note: "No official sessions today. Delegates arrive, refresh, register, and familiarize themselves with the campus.",
    sections: [
      {
        title: "Fun Run",
        cols: ["Time", "Activity", "Details / Topic", "Location"],
        rows: [
          ["06:30 - 07:00", "Arrival", "Meeting and gathering", "Silver Leaf Academy"],
          ["07:00 - 10:30", "OneVoice27 Fun Run", "Run from Silver Leaf Academy to University of Arusha", "Start: Silver Leaf Academy\nFinish: UoA"],
          ["10:30 - 11:30", "Refreshing & Settle In", "Post-run refreshments, rest, and freshen up", "UoA Facilities"],
          ["12:00 - 14:00", "Lunch (On your own)", "Delegates may explore local options or rest", "-"],
          ["14:00 - 17:00", "Venue Orientation", "Delegates freely visit halls, workshop rooms, sports grounds, and dining areas to see where sessions will be held", "Campus Wide"],
          ["17:00 onwards", "Rest & Free Time", "Settle into accommodation / Rest after travel", "-"],
        ],
      },
      {
        title: "Registration & Housing",
        cols: ["Time", "Activity", "Details / Topic", ""],
        rows: [
          ["08:00 - 18:30", "Registration & Housing", "Check-in · Welcome Kit Distribution · Guest Housing Assignment", ""],
        ],
      },
    ],
  },

  {
    label: "Wed",
    date: "Apr 1",
    title: "Opening Ceremony",
    subtitle: "& Workshops Day 1",
    sections: [
      {
        title: "Main Program",
        cols: ["Time", "Activity", "Details / Topic", "Presenter / Facilitator"],
        rows: [
          ["07:30 - 08:00", "Arrival", "Taking seats · Free picture", "All"],
          [
            "08:00 - 09:30",
            "Opening Ceremony",
            "Official Welcome\nMusic: Music Band & The Sacred\nKeynote: \"Integrated for Mission\"",
            "Gideon Msambwa · Nasibu James\nGhai Edward · Patrick Manu · Caleb Migombo\nKeynote: David Mpwani",
          ],
          ["09:30 - 09:35", "Service Promo", "-", "-"],
          ["09:35 - 09:45", "Health Break", "Networking & singing", "Entertainment Team"],
          [
            "09:45 - 10:30",
            "Presentation 1",
            "1 Billion Dashboard - Hope.cloud\nHow can we plan to reach our audience with proper tools and measures",
            "Felipe Careca",
          ],
          ["10:30 - 11:15", "Presentation 2", "-", "Ramiro Quero"],
          ["11:15 - 11:20", "Special Prayers", "Praying for the Global Church Mission Initiatives", "Jonas Singo"],
          [
            "11:20 - 11:45",
            "Collection of Ideas, Suggestions & Questions",
            "What should communication experts do to facilitate and improve church operations\n+ Special Music Item",
            "Moderators\nMusic Band & The Sacred",
          ],
          ["11:45 - 11:50", "Special Promo", "-", "Exhibition Committee"],
          [
            "11:50 - 12:50",
            "Video Reports & Project Slams",
            "Conference & Fields Communication Reports\nInnovative technologies for Mission and Church Operations",
            "Communication Directors\nContent & Creativity Committee and Judges",
          ],
          ["12:50 - 14:00", "Lunch Break", "Fellowship and refreshments", "All"],
          [
            "14:00 - 15:20",
            "Open Discussion (Session A)",
            "OneVoice27 Initiative - Hope Channel\nDigital Shepherding: Engaging Your Flock Online",
            "Sam Neves",
          ],
          ["15:20 - 15:30", "Break", "-", "-"],
          [
            "15:30 - 16:30",
            "Workshops (Session B)",
            "Track 1: Officers & Directors\nTrack 2: Pastors & Church Elders - Enhancing Church Ministries by Engaging and Empowering Communication Experts\nTrack 3: Content Creators - Social Media Strategies for Mission\nTrack 4: Secretaries & ACMS Coordinators - Understanding the Adventist Church Management System",
            "Ramiro Quero\nPr. Azza Nyamakababi\nChristopher Ungani\nHaggai Abuto",
          ],
          [
            "16:30 - 17:00",
            "Day Reflection",
            "Conference/Field officers share key takeaways of the day",
            "Lengai Ngaleson · Reuben Mbonea\nKelvin Mavanza · Justine Mbwana",
          ],
          [
            "17:00 - 18:30",
            "Sports Icebreaker",
            "Leaders' Football Match: NTUC vs STU\nNTUC Pastors vs STU Pastors",
            "-",
          ],
          ["18:30 onwards", "Dinner & Movie Night", "Dinner and Movie Night", "All"],
        ],
      },
    ],
  },

  {
    label: "Thu",
    date: "Apr 2",
    title: "Presentations, Workshops",
    subtitle: "& Delegates' Match",
    sections: [
      {
        title: "Main Program",
        cols: ["Time", "Activity", "Details / Topic", "Presenter / Facilitator"],
        rows: [
          ["07:30 - 08:00", "Arrival", "-", "All"],
          ["08:00 - 08:20", "Devotion", "A Spiritual Thought to Start the Day", "Shabatu Msaki"],
          ["08:20 - 08:25", "Music", "-", "Music Band & The Sacred"],
          ["08:25 - 09:25", "Presentation 3", "Generation Light Mode", "Christopher Ungani"],
          ["09:25 - 09:30", "Music", "-", "Music Band & The Sacred"],
          ["09:30 - 10:15", "Presentation 4", "Special Presentation", "Sam Neves"],
          ["10:15 - 11:00", "Presentation 5", "-", "Ramiro Quero"],
          ["11:00 - 11:05", "Music", "-", "Music Band & The Sacred"],
          [
            "11:05 - 11:55",
            "Presentation 6",
            "Hope Channel's Hope.cloud platform - celebrating 5 years of Jetstream",
            "Felipe Careca",
          ],
          [
            "11:55 - 12:25",
            "Adventist World Radio Presentation",
            "Reaching the Unreached Through Radio & Digital Integration",
            "Immanuel Ogwal",
          ],
          ["12:25 - 12:30", "Promo", "-", "Exhibition Committee"],
          [
            "12:30 - 12:50",
            "Video Reports & Project Slams",
            "Conference & Fields Communication Reports\nInnovative technologies for Mission and Church Operations",
            "Communication Directors\nContent & Creativity Committee and Judges",
          ],
          ["12:50 - 14:00", "Lunch Break", "Fellowship and refreshments", "All"],
          [
            "14:00 - 15:20",
            "Panel Discussion (Session B)",
            "ACMS Deep Dive & Data Q&A\nGlobal Share - content exchange within networks, with caption and dubbing features\nHandling Crisis Communication for Your Church/Organization\nQ&A: Your toughest questions on tech, media, and ministry",
            "Haggai Abuto · Baraka Muyengi · Eliud Mkoma\nSam Neves · Ramiro Quero · Felipe Careca\nSteven Bina · Christopher Ungani\nPanel of Experts",
          ],
          ["15:20 - 15:25", "Special Prayers", "Praying for leaders", "Lameck Mwamkonda"],
          ["15:25 - 15:30", "Promo", "-", "Exhibition Committee"],
          [
            "15:30 - 16:30",
            "Workshops (Session C)",
            "Track 1: Officers & Directors - Investing in Mission: Leveraging Media, Communication, and Technology\nTrack 2: Pastors - Integrating Digital Tools into Pastoral Ministry\nTrack 3: Church Elders - The Role of Media in Supporting Local Church Programs, Ministries and Events\nTrack 4: Secretaries & ACMS Coordinators - Understanding the Adventist Church Management System\nTrack 5: Content Creators - Social Media Strategies for Mission",
            "Mathias Mavanza\nAzza Nyamakababi\nSteven Bina\nAbuto Haggai\nChristopher Ungani",
          ],
          [
            "16:30 - 17:00",
            "Day Reflection",
            "Daily highlights and lessons learned",
            "Clevant Otieno · Grayson Nashumba · Kenedy Warumbe\nAbby Katete · Pascal Gissa · Joshua Mbwambo\nMethuselah Masunga · Lupakisyo Mwakasweswe",
          ],
          ["17:00 - 18:30", "Football Match 2", "Delegates Match: NTUC vs STU", "All Delegates"],
          ["19:00 onwards", "Fellowship, Dinner & Movie Night", "Storytelling around a bonfire / Movie Night", "All"],
        ],
      },
    ],
  },

  {
    label: "Fri",
    date: "Apr 3",
    title: "Presentations",
    subtitle: "& Tour",
    sections: [
      {
        title: "Main Program",
        cols: ["Time", "Activity", "Details / Topic", "Presenter / Facilitator"],
        rows: [
          ["07:30 - 08:00", "Arrival", "-", "All"],
          ["08:00 - 08:30", "Devotion", "Praise and Prayer", "Christopher Ungani"],
          ["08:30 - 08:35", "Music", "-", "Music Band & The Sacred"],
          ["08:35 - 09:20", "Presentation 7", "-", "Alyssa Truman"],
          ["09:20 - 09:30", "Health Break", "Networking & Music", "Music Band & The Sacred"],
          ["09:30 - 10:15", "Presentation 8", "Special Presentation", "Special Guest"],
          ["10:15 - 11:00", "Presentation 9", "-", "Sam Neves"],
          ["11:00 - 11:40", "Project Slams", "Presentations and showcases", "Content & Creativity Committee and Judges"],
          ["11:40 - 12:00", "Promo", "-", "Exhibition Committee"],
          [
            "12:00 - 12:30",
            "GAiN Grand Reflection",
            "GAiN 2026 Resolutions",
            "Shukrani Mutaki · Haruni Kuyenga · Leopold Mao\nElitabu Kajiru · Benjamini Ngalama\nRichard Mashauri · Meshack Mahende",
          ],
          ["12:30 - 12:50", "Official GAiN Memorial Pictures", "Group photographs", "Hope Channel Tanzania"],
          ["12:50 - 13:30", "Lunch Break", "-", "-"],
          ["13:30 - 17:00", "Afternoon Tour", "Arusha National Park Excursion - Game drives & walking safari", "Guided Tour"],
          ["17:00 - 18:00", "Preparation Evening", "Sabbath opening preparation", "-"],
          ["18:00 onwards", "Sabbath Evening Rest", "Quiet reflection", "-"],
        ],
      },
    ],
  },

  {
    label: "Sabbath",
    date: "Apr 4",
    title: "Sabbath: Worship,",
    subtitle: "Awards & Grand Concert",
    sections: [
      {
        title: "Main Program",
        cols: ["Time", "Activity", "Details / Topic", "Presenter / Facilitator"],
        rows: [
          ["08:30 - 08:40", "Arrival", "-", "-"],
          ["08:40 - 09:00", "Music", "Congregational singing", "Music Band & The Sacred"],
          ["09:00 - 09:30", "Sabbath School", "Special Sabbath School Program", "Communication Directors"],
          ["09:30 - 09:45", "Music", "Special items", "Music Band & The Sacred"],
          [
            "09:45 - 10:30",
            "Bible Study",
            "Interactive Bible Study: Theology of Communication in a Digital Age",
            "Alyssa Truman",
          ],
          ["10:30 - 11:00", "Fellowship Break", "Light refreshments", "All"],
          ["11:00 - 13:00", "Divine Service", "Sermon: To the Ends of the Earth", "Sam Neves"],
          ["13:00 - 14:00", "Sabbath Lunch", "Traditional Fellowship Lunch", "All"],
          [
            "14:00 - 17:00",
            "Closing Ceremony & Awards",
            "GAiN Tanzania Music Concert & Awards Ceremony",
            "Mathias Mavanza",
          ],
          [
            "17:00 onwards",
            "Fellowship & Final Networking",
            "Farewells, departures, and Dinner (Dinner starts at 18:00)",
            "All",
          ],
        ],
      },
    ],
  },
];

export default function ProgramPage() {
  const [active, setActive] = useState<number>(0);
  const day = DAYS[active];

  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
<br>
</br>
<br>
</br>
<br>
</br> 
     <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 mb-8">
          {DAYS.map((d, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={[
                "flex-shrink-0 flex flex-col items-center px-16 py-2 rounded-xl border text-sm font-semibold transition-all",
                active === i
                  ? "bg-red-700 border-red-700 text-white shadow-md shadow-red-200"
                  : "bg-white border-gray-200 text-gray-500 hover:border-red-300 hover:text-red-700",
              ].join(" ")}
            >
              <span className="text-xs font-normal opacity-70 mb-0.5">{d.label}</span>
              <span>{d.date}</span>
            </button>
          ))}
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {/* Day heading */}
            <div className="mb-6 pb-5 border-b border-gray-100">
              <span className="inline-block text-[10px] font-semibold tracking-widest uppercase bg-red-100 text-red-700 px-2.5 py-1 rounded-full">
                {day.label}, {day.date}
              </span>
              <h2 className="mt-2 text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                {day.title}{" "}
                <span className="text-red-600">{day.subtitle}</span>
              </h2>
              {day.note && (
                <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-2xl">
                  {day.note}
                </p>
              )}
            </div>

            {/* Sections */}
            {day.sections.map((section, sIdx) => (
              <div key={sIdx} className="mb-10">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-red-600 mb-3">
                  {section.title}
                </h3>

                <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                  <table className="w-full text-sm" style={{ minWidth: 620 }}>
                    <thead>
                      <tr className="bg-gray-950 text-white text-[11px]">
                        {section.cols.map((col, ci) => (
                          <th
                            key={ci}
                            className="px-4 py-3 text-left font-semibold tracking-widest uppercase"
                          >
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map((row, rIdx) => (
                        <tr
                          key={rIdx}
                          className={[
                            "border-t border-gray-100 align-top transition-colors hover:bg-red-50/60",
                            rIdx % 2 !== 0 ? "bg-gray-50/50" : "bg-white",
                          ].join(" ")}
                        >
                          <td className="px-4 py-3 font-semibold text-red-700 whitespace-nowrap text-xs">
                            {row[0]}
                          </td>
                          <td className="px-4 py-3 font-medium text-gray-900 w-44">
                            {row[1]}
                          </td>
                          <td className="px-4 py-3 text-gray-600 whitespace-pre-line leading-relaxed text-[13px]">
                            {row[2]}
                          </td>
                          {section.cols[3] !== "" && (
                            <td className="px-4 py-3 text-gray-400 whitespace-pre-line text-xs leading-relaxed w-52">
                              {row[3]}
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 mt-4 py-6 text-center text-xs text-gray-400 tracking-wide">
        GAiN Tanzania 2026 &nbsp;&middot;&nbsp; Tentative Program &nbsp;&middot;&nbsp; Subject to change
      </div>

    </main>
  );
}
