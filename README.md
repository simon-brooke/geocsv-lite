# geocsv-lite

An ultra-lightweight tool to show comma-separated value data on a map.

## Demo

There's a [working demo site](https://simon-brooke.github.io/geocsv-lite/), from which you can crib how to integrate this into your own website.

## Other variants

This is a little project I've played about with, and there are now three variants:

1. [geocsv](https://github.com/simon-brooke/geocsv) is a fairly heavyweight web-app with both client-side and serverside components. It was the first version, and is the only version which meets the original requirement of being able to present data from [Google Sheets](https://www.google.co.uk/sheets/about/), but it's a remarkably heavyweight solution to what should be a simple problem.
2. [geocsv-lite](https://github.com/simon-brooke/geocsv-lite) is a much lighter, client-side only reworking of the problem, in ClojureScript. I still wasn't satisfied that this was light enough.
3. [geocsv-js](https://github.com/simon-brooke/geocsv-js) is a reworking in native JavaScript without any frameworks or heave libraries, except Leaflet. It is vastly lighter, and probably the one to use in most applications.

## Overview

This is an attempt to do a lightweight client-side only version of [geocsv](https://github.com/simon-brooke/geocsv), q.v. It doesn't fully work because it cannot pull data from remote sites because of cross-site scripting rules, and I haven't found a workaround for that.

However, if all you want to do is pull data from the same server you're serving the page from, this will work for you.

The CSV file must have

* column names in the first row;
* data in all other rows;
* a column whose name is `name`, which always contains data;
* a column whose name is `latitude`, whose value is always a number between -90.0 and 90.0;
* a column whose name is `longitude`, whose value is always a number between -180.0 and 180.90

Additionally, the value of the column `category`, if present, will be used to select map pins from the map pins folder, if a suitable pin is present. Thus is the value of `category` is `foo`, a map pin image with the name `Foo-pin.png` will be selected.

Note that, unlike in **geocsv**, *THERE IS NO DEFAULT PIN*, as there is no server side intelligence so we cannot query the server for pin names. So a default pin will be shown only if either

1. There is no `category` column, or
2. If the `category` column is empty

## Other formats

`geocsv-lite` now experimentally displays GPX and KML formated XML, by using [leaflet-omnivore](https://github.com/mapbox/leaflet-omnivore). While `leaflet-omnivore` also parses CSV, it doesn't
handle the CSV as richly as GeoCSV does natively, so we don't use Omnivore to parse CSV.

Having said that, while omnivore correctly extracts and renders boundaries from KML there's a lot of other data in KML that it doesn't (e.g. it doesn't render the requested `Style` on elements, including the rather important `BallonStyle`), so I'm not entirely satisfied and might revisit this to do my own parse/render engine.

## Setup

To get an interactive development environment run:

    lein figwheel

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

    lein clean

To create a production build run:

    lein do clean, cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL.

## License

Copyright © 2020 Simon Brooke

Licensed under the GNU General Public License, version 2.0 or (at your option) any later version.
