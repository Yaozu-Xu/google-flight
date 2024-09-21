import { Flight } from '../components/FlightCard.component'
const nearByPorts = {
  status: true,
  timestamp: 1692098479952,
  data: {
    current: {
      skyId: 'BOM',
      entityId: '95673320',
      presentation: { title: 'Mumbai', suggestionTitle: 'Mumbai (BOM)', subtitle: 'India' },
      navigation: {
        entityId: '95673320',
        entityType: 'AIRPORT',
        localizedName: 'Mumbai',
        relevantFlightParams: {
          skyId: 'BOM',
          entityId: '95673320',
          flightPlaceType: 'AIRPORT',
          localizedName: 'Mumbai',
        },
        relevantHotelParams: { entityId: '27539520', entityType: 'CITY', localizedName: 'Mumbai' },
      },
    },
    nearby: [],
    recent: [],
  },
}

export const ports = {
  status: true,
  timestamp: 1692098786310,
  data: [
    {
      skyId: 'NYCA',
      entityId: '27537542',
      presentation: { title: 'New York', suggestionTitle: 'New York (Any)', subtitle: 'United States' },
      navigation: {
        entityId: '27537542',
        entityType: 'CITY',
        localizedName: 'New York',
        relevantFlightParams: {
          skyId: 'NYCA',
          entityId: '27537542',
          flightPlaceType: 'CITY',
          localizedName: 'New York',
        },
        relevantHotelParams: { entityId: '27537542', entityType: 'CITY', localizedName: 'New York' },
      },
    },
    {
      skyId: 'EWR',
      entityId: '95565059',
      presentation: { title: 'New York Newark', suggestionTitle: 'New York Newark (EWR)', subtitle: 'United States' },
      navigation: {
        entityId: '95565059',
        entityType: 'AIRPORT',
        localizedName: 'New York Newark',
        relevantFlightParams: {
          skyId: 'EWR',
          entityId: '95565059',
          flightPlaceType: 'AIRPORT',
          localizedName: 'New York Newark',
        },
        relevantHotelParams: { entityId: '27537542', entityType: 'CITY', localizedName: 'New York' },
      },
    },
    {
      skyId: 'JFK',
      entityId: '95565058',
      presentation: {
        title: 'New York John F. Kennedy',
        suggestionTitle: 'New York John F. Kennedy (JFK)',
        subtitle: 'United States',
      },
      navigation: {
        entityId: '95565058',
        entityType: 'AIRPORT',
        localizedName: 'New York John F. Kennedy',
        relevantFlightParams: {
          skyId: 'JFK',
          entityId: '95565058',
          flightPlaceType: 'AIRPORT',
          localizedName: 'New York John F. Kennedy',
        },
        relevantHotelParams: { entityId: '27537542', entityType: 'CITY', localizedName: 'New York' },
      },
    },
    {
      skyId: 'LGA',
      entityId: '95565057',
      presentation: {
        title: 'New York LaGuardia',
        suggestionTitle: 'New York LaGuardia (LGA)',
        subtitle: 'United States',
      },
      navigation: {
        entityId: '95565057',
        entityType: 'AIRPORT',
        localizedName: 'New York LaGuardia',
        relevantFlightParams: {
          skyId: 'LGA',
          entityId: '95565057',
          flightPlaceType: 'AIRPORT',
          localizedName: 'New York LaGuardia',
        },
        relevantHotelParams: { entityId: '27537542', entityType: 'CITY', localizedName: 'New York' },
      },
    },
    {
      skyId: 'SWF',
      entityId: '95566280',
      presentation: {
        title: 'Stewart International',
        suggestionTitle: 'Stewart International (SWF)',
        subtitle: 'United States',
      },
      navigation: {
        entityId: '95566280',
        entityType: 'AIRPORT',
        localizedName: 'Stewart International',
        relevantFlightParams: {
          skyId: 'SWF',
          entityId: '95566280',
          flightPlaceType: 'AIRPORT',
          localizedName: 'Stewart International',
        },
        relevantHotelParams: { entityId: '27537542', entityType: 'CITY', localizedName: 'New York' },
      },
    },
  ],
}

export const flight = {
  id: '13542-2409212040--30598-0-12712-2409212330|12712-2409221820--30598-0-13542-2409230620',
  price: { raw: 558.25, formatted: '$559' },
  legs: [
    {
      id: '13542-2409212040--30598-0-12712-2409212330',
      origin: {
        id: 'LGW',
        entityId: '95565051',
        name: 'London Gatwick',
        displayCode: 'LGW',
        city: 'London',
        country: 'United Kingdom',
        isHighlighted: false,
      },
      destination: {
        id: 'JFK',
        entityId: '95565058',
        name: 'New York John F. Kennedy',
        displayCode: 'JFK',
        city: 'New York',
        country: 'United States',
        isHighlighted: false,
      },
      durationInMinutes: 470,
      stopCount: 0,
      isSmallestStops: false,
      departure: '2024-09-21T20:40:00',
      arrival: '2024-09-21T23:30:00',
      carriers: {
        marketing: [
          {
            id: -30598,
            logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/I%29.png',
            name: 'Norse Atlantic Airways (UK)',
          },
        ],
        operationType: 'fully_operated',
      },
      segments: [],
    },
  ],
  tags: ['cheapest', 'shortest'],
}

export const flights = [
  {
    id: '13542-2409212040--30598-0-12712-2409212330|12712-2409221820--30598-0-13542-2409230620',
    price: { raw: 558.25, formatted: '$559' },
    legs: [
      {
        id: '13542-2409212040--30598-0-12712-2409212330',
        origin: {
          id: 'LGW',
          entityId: '95565051',
          name: 'London Gatwick',
          displayCode: 'LGW',
          city: 'London',
          country: 'United Kingdom',
        },
        destination: {
          id: 'JFK',
          entityId: '95565058',
          name: 'New York John F. Kennedy',
          displayCode: 'JFK',
          city: 'New York',
          country: 'United States',
        },
        durationInMinutes: 470,
        departure: '2024-09-21T20:40:00',
        arrival: '2024-09-21T23:30:00',
        stopCount: 0,
        carriers: {
          marketing: [
            {
              id: -30598,
              logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/I%29.png',
              name: 'Norse Atlantic Airways (UK)',
            },
          ],
        },
        segments: [],
      },
    ],
    tags: ['cheapest', 'shortest'],
  },
  {
    id: '13542-2409221010--30598-0-12712-2409221230|12712-2409232010--30598-0-13542-2409240620',
    price: { raw: 720.15, formatted: '$720' },
    legs: [
      {
        id: '13542-2409221010--30598-0-12712-2409221230',
        origin: {
          id: 'LHR',
          entityId: '95565050',
          name: 'London Heathrow',
          displayCode: 'LHR',
          city: 'London',
          country: 'United Kingdom',
        },
        destination: {
          id: 'JFK',
          entityId: '95565058',
          name: 'New York John F. Kennedy',
          displayCode: 'JFK',
          city: 'New York',
          country: 'United States',
        },
        durationInMinutes: 500,
        departure: '2024-09-22T10:10:00',
        arrival: '2024-09-22T12:30:00',
        stopCount: 0,
        carriers: {
          marketing: [
            {
              id: -30598,
              logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/BA.png',
              name: 'British Airways',
            },
          ],
        },
        segments: [],
      },
    ],
    tags: ['direct', 'premium'],
  },
  {
    id: '13542-2409231540--30598-1-12712-2409232040|12712-2409241320--30598-1-13542-2409250810',
    price: { raw: 650.75, formatted: '$651' },
    legs: [
      {
        id: '13542-2409231540--30598-1-12712-2409232040',
        origin: {
          id: 'LGW',
          entityId: '95565051',
          name: 'London Gatwick',
          displayCode: 'LGW',
          city: 'London',
          country: 'United Kingdom',
        },
        destination: {
          id: 'ORD',
          entityId: '95565060',
          name: 'Chicago O’Hare',
          displayCode: 'ORD',
          city: 'Chicago',
          country: 'United States',
        },
        durationInMinutes: 600,
        departure: '2024-09-23T15:40:00',
        arrival: '2024-09-23T20:40:00',
        stopCount: 1,
        carriers: {
          marketing: [
            {
              id: -30598,
              logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/UA.png',
              name: 'United Airlines',
            },
          ],
        },
        segments: [],
      },
    ],
    tags: ['stopover', 'standard'],
  },
  {
    id: '13542-2409241230--30598-0-12712-2409241430|12712-2409252120--30598-0-13542-2409260520',
    price: { raw: 890.99, formatted: '$891' },
    legs: [
      {
        id: '13542-2409241230--30598-0-12712-2409241430',
        origin: {
          id: 'LGW',
          entityId: '95565051',
          name: 'London Gatwick',
          displayCode: 'LGW',
          city: 'London',
          country: 'United Kingdom',
        },
        destination: {
          id: 'SFO',
          entityId: '95565057',
          name: 'San Francisco',
          displayCode: 'SFO',
          city: 'San Francisco',
          country: 'United States',
        },
        durationInMinutes: 660,
        departure: '2024-09-24T12:30:00',
        arrival: '2024-09-24T14:30:00',
        stopCount: 0,
        carriers: {
          marketing: [
            {
              id: -30598,
              logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/AA.png',
              name: 'American Airlines',
            },
          ],
        },
        segments: [],
      },
    ],
    tags: ['long haul', 'direct'],
  },
  {
    id: '13542-2409251830--30598-0-12712-2409252200|12712-2409261030--30598-0-13542-2409270620',
    price: { raw: 1020.5, formatted: '$1021' },
    legs: [
      {
        id: '13542-2409251830--30598-0-12712-2409252200',
        origin: {
          id: 'LHR',
          entityId: '95565050',
          name: 'London Heathrow',
          displayCode: 'LHR',
          city: 'London',
          country: 'United Kingdom',
        },
        destination: {
          id: 'LAX',
          entityId: '95565059',
          name: 'Los Angeles',
          displayCode: 'LAX',
          city: 'Los Angeles',
          country: 'United States',
        },
        durationInMinutes: 720,
        departure: '2024-09-25T18:30:00',
        arrival: '2024-09-25T22:00:00',
        stopCount: 0,
        carriers: {
          marketing: [
            {
              id: -30598,
              logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/DL.png',
              name: 'Delta Airlines',
            },
          ],
        },
        segments: [],
      },
    ],
    tags: ['premium', 'non-stop'],
  },
  {
    id: '13542-2409261000--30598-1-12712-2409261540|12712-2409272130--30598-0-13542-2409280630',
    price: { raw: 470.35, formatted: '$470' },
    legs: [
      {
        id: '13542-2409261000--30598-1-12712-2409261540',
        origin: {
          id: 'LGW',
          entityId: '95565051',
          name: 'London Gatwick',
          displayCode: 'LGW',
          city: 'London',
          country: 'United Kingdom',
        },
        destination: {
          id: 'ATL',
          entityId: '95565056',
          name: 'Atlanta',
          displayCode: 'ATL',
          city: 'Atlanta',
          country: 'United States',
        },
        durationInMinutes: 540,
        departure: '2024-09-26T10:00:00',
        arrival: '2024-09-26T15:40:00',
        stopCount: 1,
        carriers: {
          marketing: [
            {
              id: -30598,
              logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/SW.png',
              name: 'Southwest Airlines',
            },
          ],
        },
        segments: [],
      },
    ],
    tags: ['budget', 'one stop'],
  },
]
