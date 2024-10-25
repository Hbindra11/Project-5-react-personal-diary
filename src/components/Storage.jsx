const DIARY_KEY = "personalDiary";

const getDiaryData = () => {
  const diaryData = localStorage.getItem(DIARY_KEY);
  return diaryData ? JSON.parse(diaryData) : {};
};

const saveDiaryData = (data) => {
  localStorage.setItem(DIARY_KEY, JSON.stringify(data));
};

export const addOrUpdateEntry = (entry) => {
  const diaryData = getDiaryData();
  diaryData[entry.date] = entry; // Use date as key
  saveDiaryData(diaryData);
};

export const getEntries = () => {
  const diaryData = getDiaryData();
  return Object.values(diaryData).sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getEntryByDate = (date) => {
  const diaryData = getDiaryData();
  return diaryData[date] || null;
};



