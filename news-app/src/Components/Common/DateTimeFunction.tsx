

function formatDateAndTime(published_date: string) {
  // Creating a Date object from the published_date string
  const date = new Date(published_date);

  // Defining month names in abbreviated format
  const monthNames: string[] = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  // Extract month, day, and year from the Date object
  const month: string = monthNames[date.getMonth()];
  const day: number = date.getDate();
  const year: number = date.getFullYear();

  // Format the date as "Mon. DD, YYYY"
  const formattedDate: string = `${month}. ${day}, ${year}`;

  // Calculate the time difference in hours
  const now: Date = new Date();
  const timeDifference: number = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

  // Format the time difference as "Xh ago"
  const formattedTime: string = `${timeDifference}h ago`;

  return { formattedDate, formattedTime };
}

export default formatDateAndTime;
