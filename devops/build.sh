#!/bin/bash
docker exec -i polymerproject2 /bin/bash -c "export NODE_OPTIONS=--max_old_space_size=12288 && polymer build";
