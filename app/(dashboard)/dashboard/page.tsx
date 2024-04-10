"use client"
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-sales";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BriefcaseIcon, MapPinIcon, HammerIcon, NetworkIcon, BellIcon } from 'lucide-react';

import { faker } from '@faker-js/faker'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Top 10 Skills Categories',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1,
        max: 5,
      },
    },
  },
  elements: {
    bar: {
      borderRadius: 3
    }
  }
};

const skillCategoriesLabel = [
  "BA Process Engineering",
  "Bussiness Analysis",
  "BA Requirements",
  "Finance and Accounting",
  "Sales prospecting",
  "Sales product and technology",
  "Sales consultation",
  "Sales management",
  "Clound management",
  "Cloud Computing",
  "Deals and Closing"
]
const skillsData = [
  5.00,
  4.83,
  4.25,
  3.43,
  2.33,
  1.00,
  1.00,
  1.00,
  1.00,
  1.00,
  1.00
]
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r},${g},${b},1)`;
}
const skillsDataObj = {
  labels: skillCategoriesLabel,
  datasets: [
    {
      label: 'Skills',
      data: skillsData,
      backgroundColor: Array.from({ length: skillsData.length }, () => getRandomColor())
    },
  ],
};


export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


const skills = [
  { rank: 1, score: 5.0, name: 'Budgeting and forecasting' },
  { rank: 2, score: 5.0, name: 'Business process analysis' },
  { rank: 3, score: 5.0, name: 'Business process engineering' },
  { rank: 4, score: 5.0, name: 'Business valuation' },
  { rank: 5, score: 5.0, name: 'Business strategy' },
  { rank: 6, score: 4.9, name: 'Business development' },
  { rank: 7, score: 5.0, name: 'Market analysis' },
  { rank: 8, score: 5.0, name: 'Financial analysis' },
  { rank: 9, score: 5.0, name: 'Project management' },
  { rank: 10, score: 5.0, name: 'Risk management' },
];


const topInterests = [
  { rank: 1, score: 5.0, name: 'Business process analysis' },
  { rank: 2, score: 5.0, name: 'Business process engineering' },
  { rank: 3, score: 5.0, name: 'Financial ethics' },
  { rank: 4, score: 5.0, name: 'Product evaluation' },
  { rank: 5, score: 5.0, name: 'Stakeholder requirements judgement' },
  { rank: 6, score: 5.0, name: 'Use case analysis and design' },
  { rank: 7, score: 5.0, name: 'Workflow analysis and design' },
  { rank: 8, score: 4.0, name: 'Budgeting and forecasting' },
  { rank: 9, score: 4.0, name: 'Business case development' },
  { rank: 10, score: 4.0, name: 'Business valuation' },
];


const peopleWithSimilarSkills = [
  { rank: 1, name: 'John Doe', title: 'Business Analyst', skills: 187, location: 'Chennai' },
  { rank: 2, name: 'John Doe', title: 'Architect', skills: 17, location: 'Lucknow' },
]
export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <Tabs defaultValue="analytics" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">
              Analytics
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Subscriptions
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sales</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Now
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">
                    +201 since last hour
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-4 md:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            {/* Basic Cards */}
            <div className="grid grid-cols-12 md:grid-cols-3 gap-2 mb-6">
              <Card className="rounded-md md:flex justify-between items-center p-6  shadow-md py-8">
                <div className="flex flex-col items-center justify-center mr-4">
                  <Avatar className='ring-4 ring-white h-24 w-24'>
                    <AvatarImage className='rounded-full size-9' src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>

                <Separator orientation="vertical" />

                <div className="info self-start ml-6">
                  <h1 className="text-2xl font-bold mb-3">Vikash Kumar</h1>
                  <div className="flex items-center mb-2">
                    <NetworkIcon />
                    <p className="ml-2">Cloud Integration Architect</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <HammerIcon />
                    <p className="ml-2">187 Skills</p>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon />
                    <p className="ml-2">Chennai</p>
                  </div>
                </div>
              </Card>

              <Card className="flex rounded-md justify-evenly shadow-md p-2 items-center h-full">

                <div className="flex flex-col items-center justify-end h-full">
                  <div className="w-10 h-3/5 bg-green-200 flex flex-col">
                    <div className="w-full bg-gray-500 h-1/3" />
                  </div>

                  <div className="mt-2 text-xl font-bold">30%</div>
                  <div className="mt-2 mb-2">Skill Level</div>
                </div>
                <div className="flex flex-col items-center justify-end h-full">
                  <div className="w-10 h-3/5 bg-green-200 flex flex-col">
                    <div className="w-full bg-gray-500 h-2/3" />
                  </div>

                  <div className="mt-2 text-xl font-bold">60%</div>
                  <div className="mt-2 mb-2">Interest Level</div>
                </div>


                <div className="flex flex-col items-center justify-end h-full">
                  <div className="relative w-24 h-24 h-1/3">
                    <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="transparent" stroke="#ddd" strokeWidth="10" />
                      <circle cx="50" cy="50" r="45" fill="transparent" stroke="#4caf50" strokeWidth="10" strokeDasharray="141.37" strokeDashoffset="70.68" />
                    </svg>
                  </div>
                  <div className="mt-8 text-xl font-bold">50%</div>
                  <div className="mt-2 mb-2">Competency</div>
                </div>
              </Card>

              <Card className="flex flex-col gap-4 p-4 rounded-md">
                <h1 className="font-bold text-xl">Trainings</h1>
                <div className="flex justify-between bg-gray-100 p-2 rounded-md">
                  <div className="flex items-center gap-2">
                    <BellIcon className="dark:text-black" size={18} />
                    <h1 className="dark:text-black">Web Devlopement Guide</h1>

                  </div>

                  <Badge className="h-6 dark:drop-shadow-lg">developement 4</Badge>
                </div>
                <div className="flex justify-between bg-gray-100 p-2 rounded-md">
                  <div className="flex items-center gap-2">
                    <BellIcon className="dark:text-black" size={18} />
                    <h1 className="dark:text-black">Web Devlopement Guide</h1>

                  </div>

                  <Badge className="h-6 dark:drop-shadow-lg">developement 4</Badge>
                </div>
                <div className="flex justify-between bg-gray-100 p-2 rounded-md">
                  <div className="flex items-center gap-2">
                    <BellIcon className="dark:text-black" size={18} />
                    <h1 className="dark:text-black">Web Devlopement Guide</h1>

                  </div>

                  <Badge className="h-6 dark:drop-shadow-lg">developement 4</Badge>
                </div>
              </Card>

            </div>


            <div className="grid grid-cols-3 gap-2 rounded-md">
              <Card className="col-span-2 p-4">
                <Bar options={options} data={skillsDataObj} />

              </Card>





              <Card className="col-span-1 flex flex-col gap-2 rounded-md p-4 dark:bg-black bg-white shadow-lg">
                <h1 className="font-bold text-2xl mb-2 ">Top 10 Interests</h1>
                {skills.map(skill => (
                  <div key={skill.rank} className="flex justify-start items-center gap-4">
                    <p className="text-lg font-semibold" style={{ width: '30px', textAlign: 'right' }}>{skill.rank}</p>
                    <Badge className="mr-4 bg-blue-500 text-white px-2 py-1 rounded">{skill.score.toFixed(1)}</Badge>
                    <p className="text-gray-700">{skill.name}</p>
                  </div>
                ))}
              </Card>

              <Card className="col-span-1 flex flex-col gap-2 rounded-md p-4 dark:bg-black bg-white shadow-lg">
                <h1 className="font-bold text-2xl mb-2 ">Top 10 Interests</h1>
                {skills.map(skill => (
                  <div key={skill.rank} className="flex justify-start items-center gap-4">
                    <p className="text-lg font-semibold" style={{ width: '30px', textAlign: 'right' }}>{skill.rank}</p>

                    <Badge className="mr-4 bg-blue-500 text-white px-2 py-1 rounded">{skill.score.toFixed(1)}</Badge>
                    <p className="text-gray-700">{skill.name}</p>
                  </div>
                ))}
              </Card>

              <Card className="col-span-1 flex flex-col  rounded-md p-4 dark:bg-black bg-white shadow-lg">
                <h1 className="font-bold text-2xl mb-1">People with similar skills</h1>
                {peopleWithSimilarSkills.map(people => (
                  <div className="flex justify-between items-center">

                    <div key={people.rank} className="flex justify-start items-center gap-2">
                      <p className="text-lg font-semibold mr-2" style={{ width: '30px', textAlign: 'right' }}>{people.rank}</p>
                      <Avatar className='flex justify-between items-center ring-white'>
                        <AvatarImage className='rounded-full size-9 w-6 h-6' src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <p className="text-gray-700 dark:text-white">{people.name}</p>
                    </div>
                    <Badge className="mr-4 bg-blue-500 h-6 text-white px-2 py-1 rounded">{people.skills} Skills</Badge>

                  </div>
                ))}
              </Card>



              <Card className="col-span-1 col-span-1 flex flex-col gap-2 rounded-md p-4 dark:bg-black bg-white shadow-lg">
                <h1 className="font-bold text-2xl mb-2 ">Top 10 Interests</h1>
                {skills.map(skill => (
                  <div key={skill.rank} className="flex justify-start items-center gap-4">
                    <p className="text-lg font-semibold dark:text-white" style={{ width: '30px', textAlign: 'right' }}>{skill.rank}</p>
                    <p className="text-gray-700">{skill.name}</p>
                  </div>
                ))}
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
}
