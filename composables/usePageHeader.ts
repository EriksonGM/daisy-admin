export const usePageHeader = (title: string, icon: string) => {

    useSeoMeta({
        title: title
    })

    /*let tspan = document.getElementById('page-title') as HTMLSpanElement;

    if (tspan) {
        tspan.textContent = title;
    }

    let iconSpan = document.getElementById('page-icon') as HTMLSpanElement;

    if (iconSpan) {
        iconSpan.className = icon;
    }*/
}