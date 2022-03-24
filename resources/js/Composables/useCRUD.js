import { useForm } from "@inertiajs/inertia-vue3";
import _ from "lodash";

export default () => {
  const idMap = (model) => model?.id;

  const mediaMap = (media) => {
    if (media)
      return {
        id: media.id,
        name: media.file_name,
        url: media.url,
        status: "finished",
      };
    return null;
  };

  const createBlueVotePersonForm = (person = null, volunteer = false) => {
    console.log(volunteer);
    if (person === null) {
      return useForm({
        name: "",
        position: "",
        volunteer: volunteer == 1 ? true : false,
        profile_photo: null,
      });
    }
    return useForm({
      name: person.name,
      position: person.position,
      volunteer: person.volunteer,
      profile_photo: mediaMap(person.profile_photo),
      _method: "PATCH",
    });
  };

  const createInfoModuleForm = (infoModule = null) => {
    if (infoModule == null) {
      return useForm({
        title: "",
        description: "",
        speakers: "",
        downloadables: [],
        cover: null,
        related_videos: [],
      });
    }

    const values = _.pick(infoModule, ["title", "description", "speakers"]);
    values._method = "PATCH";
    values.cover = mediaMap(infoModule.cover);
    values.downloadables = infoModule.downloadables?.map(mediaMap) || [];
    values.related_videos = infoModule.related_video_resources.map(idMap);

    return useForm(values);
  };

  return {
    createInfoModuleForm,
    createBlueVotePersonForm,
  };
};
