function countAndSortCategories(categories) {
  
  const counts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  
  const sortedEntries = Object.entries(counts).sort((a, b) => b[1] - a[1]);

  
  const sortedObject = sortedEntries.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

  return sortedObject;
}


const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log(countAndSortCategories(input));
