export const usePageHeader = (title: string, icon: string) => {
    useSeoMeta({
        title: title
    })

    if (import.meta.client) {
        let header = document.getElementById('page-header') as HTMLSpanElement;

        if (header) {
            header.innerHTML = `<i class="ti text-xl ${icon} me-2"></i><span>${title}</span>`;
        }

        /*let iconSpan = document.getElementById('page-icon') as HTMLSpanElement;

        if (iconSpan) {
            iconSpan.className = icon;
        }*/
    }
}