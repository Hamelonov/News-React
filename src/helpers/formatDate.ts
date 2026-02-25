export const formatDate = (date:any) => {
  const options = {
    year: 'numeric',
    month: 'long',
    weekday: 'long',
    day: 'numeric'
  }

  return date.toLocaleDateString('en-Us', options)
}