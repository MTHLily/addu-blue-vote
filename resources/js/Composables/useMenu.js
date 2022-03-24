import { computed, h, ref } from "vue";
import { NIcon } from "naive-ui";
import { Link } from "@inertiajs/inertia-vue3";
import { values } from "lodash";

export default () => {
  const renderIcon = (icon) => {
    return () => h(NIcon, null, () => h("i", { class: `bi ${icon}` }));
  };

  const renderLabel = (
    label,
    labelOptions = {
      href: "/dashboard",
    }
  ) => {
    return () => h(Link, labelOptions, () => label);
  };

  const siderOptions = ref([
    {
      label: renderLabel("Locations", {
        href: route("locations.index"),
      }),
      icon: renderIcon("bi-geo-alt-fill"),
      key: "locations",
    },
    {
      label: renderLabel("Points of Interest", {
        href: route("poi.index"),
      }),
      icon: renderIcon("bi-geo-fill"),
      key: "poi",
    },
    {
      label: "Political Education",
      icon: renderIcon("bi-megaphone-fill"),
      key: "political-education",
      children: [
        {
          label: renderLabel("Information Modules", {
            href: route("information-modules.index"),
          }),
          key: "information-modules",
        },
        {
          label: renderLabel("Video Resources", {
            href: route("video-resources.index"),
          }),
          key: "video-resources",
        },
      ],
    },
    {
      label: "Voter's Registration",
      icon: renderIcon("bi-pen-fill"),
      key: "voters-registration",
      children: [
        {
          label: renderLabel("Information", {
            href: route("information.index"),
          }),
          key: "information-snippets",
        },
        {
          label: renderLabel("FAQs", {
            href: route("faqs.index"),
          }),
          key: "faqs",
        },
      ],
    },
    {
      label: "Voter's Education",
      icon: renderIcon("bi-info-circle-fill"),
      key: "voters-education",
      children: [
        {
          label: renderLabel("Election Process", {
            href: route("election-process-steps.index"),
          }),
          key: "election-process-steps",
        },
        {
          label: renderLabel("News", {
            href: route("news.index"),
          }),
          key: "news-articles",
        },
        {
          label: renderLabel("News Sources", {
            href: route("news-sources.index"),
          }),
          key: "news-sources",
        },
      ],
    },
    {
      label: "Candidate Profiles",
      icon: renderIcon("bi-people-fill"),
      key: "candidate-profiles",
      children: [
        {
          label: renderLabel("Candidate Profiles", {
            href: route("candidates.index"),
          }),
          key: "candidates",
        },
        {
          label: renderLabel("Issues", {
            href: route("issues.index"),
          }),
          key: "issues",
        },
        {
          label: renderLabel("Political Parties", {
            href: route("political-parties.index"),
          }),
          key: "political-parties",
        },
      ],
    },
    {
      label: "About Us",
      icon: renderIcon("bi-people-fill"),
      key: "about-us",
      //label: renderLabel("About Us", {
      // href: route("about-us.config"),
      children: [
        {
          label: renderLabel("About Us", {
            href: route("about-us.config"),
          }),
          key: "about-us",
        },
        {
          label: renderLabel("Partner Offices", {
            href: route("partner-offices.index"),
          }),
          key: "partner-offices",
        },
        {
          label: renderLabel("Volunteer Process", {
            href: route("volunteer-process-steps.index"),
          }),
          key: "volunteer-process-steps",
        },
      ],
    }, //),

    //},
  ]);

  const currentSiderKey = computed(() => {
    const currentRoute = route().current();
    const routeMap = {
      locations: ["locations.index", "locations.create", "locations.edit"],
      poi: ["poi.index", "poi.create", "poi.edit"],
      "information-snippets": [
        "information.index",
        "information.create",
        "information.edit",
      ],
      "election-process-steps": [
        "election-process-steps.index",
        "election-process-steps.create",
        "election-process-steps.edit",
      ],
      "information-modules": [
        "information-modules.index",
        "information-modules.create",
        "information-modules.edit",
      ],
      faqs: ["faqs.index", "faqs.create", "faqs.edit"],
      "news-articles": ["news.index", "news.edit"],
      "news-sources": ["news-sources.index", "news-sources.edit"],
      "video-resources": [
        "video-resources.index",
        "video-resources.create",
        "video-resources.edit",
      ],
      candidates: ["candidates.index", "candidates.create", "candidates.edit"],
      "political-parties": [
        "political-parties.index",
        "political-parties.create",
        "political-parties.edit",
      ],
      issues: ["issues.index", "issues.create", "issues.edit"],
      "about-us": [
        "about-us.config",
        "previous-projects.create",
        "previous-projects.edit",
        "bluevote-people.create",
        "bluevote-people.edit",
      ],
    };

    for (const [key, value] of Object.entries(routeMap)) {
      if (value.includes(currentRoute)) return key;
    }

    return "locations";
  });

  return {
    renderLabel,
    siderOptions,
    currentSiderKey,
  };
};
