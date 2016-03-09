# fs.watch()

Follow these steps on a windows machine to replicate the wrong file being reported and
the endless loop that it can cause.

## Steps

**Wrong file reported**

- ``node index.js``
- Change ``test/file.js`` and see it being reported as ``test/file.jsx``


**Endless loop**

- ``gulp watch``
- Change ``test/file.jsx`` and notice that every time ``test/file.js`` is changed a new ``test/file.jsx`` is reported in an endless loop.
