export const formatDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    weekday: 'long',
    day: 'numeric'
  }

  return date.toLocaleDateString('en-Us', options)
}