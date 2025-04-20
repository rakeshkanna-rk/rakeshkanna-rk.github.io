import { ref, onMounted } from "vue";

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export function useFetchData(url, cacheKey = "projectsData") {
  const data = ref([]);
  const isLoading = ref(true);
  const error = ref(null);

  onMounted(async () => {
    const cachedItem = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(`${cacheKey}_timestamp`);

    const now = Date.now();
    const isExpired = cachedTime && now - parseInt(cachedTime) > CACHE_DURATION;

    try {
      if (cachedItem && cachedTime && !isExpired) {
        data.value = JSON.parse(cachedItem);
        isLoading.value = false;
        return;
      }
    } catch (e) {
      console.warn("Invalid cached data. Clearing cache.");
      localStorage.removeItem(cacheKey);
      localStorage.removeItem(`${cacheKey}_timestamp`);
    }

    // Fetch new data
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch project data");

      const getdata = await res.json();
      data.value = getdata;

      localStorage.setItem(cacheKey, JSON.stringify(getdata));
      localStorage.setItem(`${cacheKey}_timestamp`, Date.now().toString());
    } catch (err) {
      console.error("Error fetching data:", err);
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  });

  return { data, isLoading, error };
}
