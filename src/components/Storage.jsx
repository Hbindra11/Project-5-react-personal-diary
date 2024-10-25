const DIARY_KEY = "personalDiary";

// Get entries as an object keyed by date
const getDiaryData = () => {
  const diaryData = localStorage.getItem(DIARY_KEY);
  return diaryData ? JSON.parse(diaryData) : {};
};

// Save entries as an object keyed by date
const saveDiaryData = (data) => {
  localStorage.setItem(DIARY_KEY, JSON.stringify(data));
};

// Add or update an entry
export const addOrUpdateEntry = () => {
  const diaryData = getDiaryData();
  saveDiaryData(diaryData);
};

// Get all entries as an array sorted by date
export const getEntries = () => {
  const diaryData = getDiaryData();
  return Object.values(diaryData).sort((a, b) => new Date(b.date) - new Date(a.date));
};

// Get a single entry by date
export const getEntryByDate = (date) => {
  const diaryData = getDiaryData();
  return diaryData[date] || null;
};


