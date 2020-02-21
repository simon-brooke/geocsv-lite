# geocsv-lite

A wee tool to show comma-separated value data on a map.

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
