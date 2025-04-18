import { ref, onMounted } from "vue";

export function useFetchData(url, cacheKey = "projectsData") {
  const data = ref([]);
  const isLoading = ref(true);
  const error = ref(null);

  onMounted(async () => {
    const cached = localStorage.getItem(cacheKey);
    try {
      if (cached && cached !== "undefined") {
        data.value = JSON.parse(cached);
        isLoading.value = false;
        return;
      }
    } catch (e) {
      console.warn("Invalid cached data. Clearing cache.");
      localStorage.removeItem(cacheKey);
    }

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch project data");

      const getdata = await res.json();
      data.value = getdata;
      localStorage.setItem(cacheKey, JSON.stringify(getdata));
    } catch (err) {
      console.error("Error fetching data:", err);
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  });

  return { data, isLoading, error };
}
