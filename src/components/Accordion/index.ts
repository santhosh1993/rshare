import {AccordionComponent, AccordionRef} from './Accordion.interface';
import {AccordionBody} from './AccordionBody';
import {AccordionHead} from './AccordionHead';
import {AccordionIcon} from './AccordionIcon';
import {AccordionItem} from './AccordionItem';
import {AccordionWrapper} from './AccordionWrapper';

/**
 * Example:
 *    <Accordion>
 *        ...
 *        <Accordion.Item>
 *            ...
 *            <Accordion.Head>
 *                ...
 *                <Accordion.Icon animationType={} />
 *            </Accordion.Head>
 *            ...
 *            <Accordion.Icon animationType={} />
 *            ...
 *            <Accordion.Body>
 *                ...
 *                <Accordion.Icon animationType={} />
 *                ...
 *            </Accordion.Body>
 *            ...
 *        </Accordion.Item>
 *
 *      Repeat
 *    </Accordion>
 */

export const Accordion = AccordionWrapper as AccordionComponent;

Accordion.Item = AccordionItem;
Accordion.Head = AccordionHead;
Accordion.Body = AccordionBody;
Accordion.Icon = AccordionIcon;

export type {AccordionRef};
