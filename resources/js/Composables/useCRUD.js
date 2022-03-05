import { useForm } from "@inertiajs/inertia-vue3";
import _ from "lodash";

export default () => {
  const idMap = (model) => model.id;

  const mediaMap = (media) => {
    return {
      id: media.id,
      name: media.file_name,
      status: "finished",
    };
  };

  const createInfoModuleForm = (infoModule = null) => {
    if (infoModule == null) {
      return useForm({
        title: "",
        description: "",
        speakers: "",
        media: [],
        related_videos: [],
      });
    }

    const values = _.pick(infoModule, ["title", "description", "speakers"]);
    values._method = "PATCH";
    values.media = infoModule.media.map(mediaMap);
    values.related_videos = infoModule.related_video_resources.map(idMap);

    return useForm(values);
  };

  return {
    createInfoModuleForm,
  };
};
