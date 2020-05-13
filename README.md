<pre>
  _______                   _          _     
 |__   __|                 | |        (_)    
    | |_ __ ___  __ _ _ __ | |_ ______ _ ___ 
    | | '__/ _ \/ _` | '_ \| __|______| / __|
    | | | |  __/ (_| | | | | |_       | \__ \
    |_|_|  \___|\__,_|_| |_|\__|      | |___/
                                     _/ |    
                                    |__/     
</pre>

Treant-js is an SVG based JS library for drawing tree diagrams.
It relies on Raphael for handling SVG and animations.

For Docs, Examples, and everything else see:
http://fperucic.github.io/treant-js

- CUSTOMIZATION
  I have added sibling feature(for root Node) and spouse feature.
  The node structure has been changed.
  * If the root Node has sibling(s), you need to add it with 'sibling' key.
    And the child of root node should be pseudo Node, and children will be child of the pseudo Node.
  * If the Node has spouse, you need to add it with 'spouse' key.
    Each Node can has multiple spouses, and at that time, the children will be child of each spouse.