import { getConfiguration } from "./requestServices";

export function prepareImgUrl(configuration, originalSize, movie) {

    const backdropSize = ["w200", "w780", "w1280", "original"];
    let size = configuration.images?.backdrop_sizes.find(
        (size) => size === originalSize
    )
        ? originalSize
        : backdropSize[backdropSize.length - 1];
    let baseUrl = configuration.images?.base_url;
    return `${baseUrl}/${size}/${movie?.backdrop_path}`;
}
